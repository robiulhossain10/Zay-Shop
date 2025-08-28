import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare var bootstrap: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: any[] = [];
  userForm!: FormGroup;
  isEditMode = false;
  editingUserId?: string | number;
  modalInstance: any;
  deleteModalInstance: any;
  deletingUserId?: string | number;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    // Initialize modals after view is loaded
    const modalEl = document.getElementById('userModal');
    const deleteModalEl = document.getElementById('deleteModal');
    if (modalEl) this.modalInstance = new bootstrap.Modal(modalEl);
    if (deleteModalEl)
      this.deleteModalInstance = new bootstrap.Modal(deleteModalEl);

    // Reset form on modal close
    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', () => {
        this.userForm.reset();
        this.isEditMode = false;
        this.editingUserId = undefined;
      });
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error loading users', err),
    });
  }

  openModal(user?: any) {
    this.isEditMode = !!user;
    this.editingUserId = user?.id;

    if (user) this.userForm.patchValue({ name: user.name, email: user.email });
    else this.userForm.reset();

    this.modalInstance.show();
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if (this.isEditMode) {
      this.userService
        .updateUser(this.editingUserId!, this.userForm.value)
        .subscribe({
          next: () => {
            this.loadUsers();
            this.modalInstance.hide();
          },
          error: (err) => console.error('Update error', err),
        });
    } else {
      this.userService.addUser(this.userForm.value).subscribe({
        next: () => {
          this.loadUsers();
          this.modalInstance.hide();
        },
        error: (err) => console.error('Add error', err),
      });
    }
  }

  openDeleteModal(userId: string | number) {
    this.deletingUserId = userId;
    this.deleteModalInstance.show();
  }

  confirmDelete() {
    if (this.deletingUserId != null) {
      this.userService.deleteUser(this.deletingUserId).subscribe({
        next: () => {
          this.loadUsers();
          this.deleteModalInstance.hide();
        },
        error: (err) => console.error('Delete error', err),
      });
    }
  }
}
