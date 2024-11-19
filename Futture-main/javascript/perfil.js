document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const editAvatarBtn = document.querySelector('.edit-avatar-btn');
    const editCoverBtn = document.querySelector('.edit-cover-btn');

    editProfileBtn.addEventListener('click', () => {
        alert('Editar perfil');
        // Aqui você pode adicionar a lógica para edição do perfil
    });

    editAvatarBtn.addEventListener('click', () => {
        alert('Alterar foto de perfil');
        // Aqui você pode adicionar a lógica para upload de avatar
    });

    editCoverBtn.addEventListener('click', () => {
        alert('Alterar foto de capa');
        // Aqui você pode adicionar a lógica para upload de capa
    });
});