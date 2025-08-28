import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare var bootstrap: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: any[] = [];
  userForm!: FormGroup;
  isEditMode = false;
  editingUserId?: string | number;

  // Modals
  modalInstance: any;
  deleteModalInstance: any;
  successModalInstance: any;
  deletingUserId?: string | number;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    const userModalEl = document.getElementById('userModal');
    const deleteModalEl = document.getElementById('deleteModal');
    const successModalEl = document.getElementById('successModal');

    if (userModalEl) this.modalInstance = new bootstrap.Modal(userModalEl);
    if (deleteModalEl)
      this.deleteModalInstance = new bootstrap.Modal(deleteModalEl);
    if (successModalEl)
      this.successModalInstance = new bootstrap.Modal(successModalEl);

    userModalEl?.addEventListener('hidden.bs.modal', () => {
      this.userForm.reset();
      this.isEditMode = false;
      this.editingUserId = undefined;
    });
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => (this.users = res || []),
      error: (err) => {
        console.error('Error loading users', err);
        this.users = [];
      },
    });
  }

  openModal(user?: any) {
    this.isEditMode = !!user;
    this.editingUserId = user?.id;
    if (user) this.userForm.patchValue({ name: user.name, email: user.email });
    else this.userForm.reset();
    this.modalInstance?.show();
  }

  openDeleteModal(id: string | number) {
    this.deletingUserId = id;
    this.deleteModalInstance?.show();
  }

  confirmDelete() {
    if (!this.deletingUserId) return;
    this.userService.deleteUser(this.deletingUserId).subscribe({
      next: () => {
        this.loadUsers();
        this.deleteModalInstance?.hide();
        this.showSuccessModal();
      },
      error: (err) => console.error('Delete error', err),
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const request$ = this.isEditMode
      ? this.userService.updateUser(this.editingUserId!, this.userForm.value)
      : this.userService.addUser(this.userForm.value);

    request$.subscribe({
      next: () => {
        this.loadUsers();
        this.modalInstance?.hide();
        this.showSuccessModal();
      },
      error: (err) =>
        console.error(this.isEditMode ? 'Update error' : 'Add error', err),
    });
  }

  showSuccessModal() {
    this.successModalInstance?.show();
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
