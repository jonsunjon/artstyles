let LeaderPhoto = document.querySelector('.team__photo_leader');
let MemberPhotos = document.querySelectorAll('.team__photo_member');


MemberPhotos.forEach( (MemberPhoto) => {
    MemberPhoto.addEventListener('click', ChangePhoto);
    function ChangePhoto(evt) {
        var Leader= LeaderPhoto.classList[3];
        var Member = MemberPhoto.classList[2];
        var MemberData = document.getElementById(Member);
        var LeaderData = document.getElementById(Leader);
        LeaderData.classList.add('hide');
        MemberData.classList.toggle('hide');
        LeaderPhoto.classList.remove(LeaderPhoto.classList[3]);
        MemberPhoto.classList.remove(MemberPhoto.classList[2]);
        LeaderPhoto.classList.add(Member);
        MemberPhoto.classList.add(Leader);
    }
});