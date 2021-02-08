const createMallet = (element, animation) => {
      // Cursor change to element
      element.style.display = 'block';
      window.addEventListener('mousemove', (e) => {
        element.style.top = e.pageY + 'px';
        element.style.left = e.pageX + 'px';
      })
      // element hit animation
      window.addEventListener('click', () => {
        element.style.animation = animation;
        // Remove animaton after click to add it again шт the code above
        setTimeout(() => {
          element.style.removeProperty('animation');
        }, 100);
      })
}

export default createMallet;