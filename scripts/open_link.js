AFRAME.registerComponent('open-link', {
      schema: { 
        link: {type: 'string', default: ''}
      },
      init() {
        this.el.addEventListener('click', () => 
        {
            window.open([this.data.link], '_blank'); 
            console.log('link opened');
        })
      }
    })