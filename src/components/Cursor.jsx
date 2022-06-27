import React, { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),

      init() {
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners() {
        const self = this;

        document.querySelectorAll('a').forEach((el) => {
          el.addEventListener('mouseover', () => {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', () => {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        document.querySelectorAll('button').forEach((el) => {
          el.addEventListener('mouseover', () => {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', () => {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        document.addEventListener('mousedown', () => {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', () => {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        document.addEventListener('mousemove', (e) => {
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = `${self.endY}px`;
          self.$dot.style.left = `${self.endX}px`;
        });

        document.addEventListener('mouseenter', () => {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', () => {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline() {
        const self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = `${self._y}px`;
        self.$outline.style.left = `${self._x}px`;

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize() {
        const self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.85)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.2)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },

      toggleCursorVisibility() {
        const self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      },
    };

    cursor.init();
  }, []);
  return (
    <>
      <div className="cdo cursor-dot-outline" />
      <div className="cd cursor-dot" />
    </>
  );
}
