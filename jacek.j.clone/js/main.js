document.querySelectorAll('.bouncer span').forEach(span => (
    span.addEventListener('mouseover', function () {
        this.classList.add('bounce')
        setTimeout(function () {
            this.classList.remove('bounce')
        }.bind(this), 1000)
    })
))