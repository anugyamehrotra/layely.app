// filter-app.js


const defaultImagesArray = [
  'https://dr.savee-cdn.com/things/6/8/aa94d23c9caf274df71997.webp','https://dr.savee-cdn.com/things/6/5/cd123eb942f354fbed8488.png', 'https://dr.savee-cdn.com/things/6/3/b90417c12c5b20bc8a19a7.webp','https://dr.savee-cdn.com/things/6/6/9012573093fc14c457df7f.webp', 'https://dr.savee-cdn.com/things/6/8/a3846b3c9caf26bd45f4e1.webp', 'https://dr.savee-cdn.com/things/6/8/aa93b53c9caf274df188f3.webp', 'https://dr.savee-cdn.com/things/6/8/9f82d83c9caf26a660d28d.webp', 'https://dr.savee-cdn.com/things/6/8/a3170c3c9caf26ba676c11.png'];
// update @ saaveit

let logIsImageLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
  if (!logIsImageLoaded) {
    const imageInDiv = document.getElementById('imageShow');
    if (imageInDiv) {
      imageInDiv.src = defaultImagesArray[Math.floor(Math.random() * defaultImagesArray.length)]; // multiply random whole no. * array length for random display or whatever tf 
    }
  }
  /* credits: anugya mehrotra 
  @ https://github.com/anugyamehrotra 
  | inspired by https://savee.com/  */
});


 function exportImage() {
    const img = document.getElementById('imageShow');
    if (!img || !img.src) {
        alert('No image to export.');
        return;
    }

    const tmp = new Image();
    tmp.crossOrigin = 'anonymous'; 
    tmp.onload = function() {
        const w = tmp.naturalWidth || tmp.width;
        const h = tmp.naturalHeight || tmp.height;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');

        const cssFilter = (window.getComputedStyle ? getComputedStyle(img).filter : img.style.filter) || 'none';
        if ('filter' in ctx) {
            ctx.filter = cssFilter;
        } else {
            alert('Unfortunately your browser does not support canvas filters. Please upgrade to a modern-browser or export without filters.');
        }

        ctx.drawImage(tmp, 0, 0, w, h);

        canvas.toBlob(function(blob) {
            if (!blob) {
                alert('Export failed.');
                return;
            }
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'filtered-image.png';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        }, 'image/png');
    };

    tmp.onerror = function() {
        alert('Could not load image for export. This may be due to cross-origin restrictions.');
    };

    tmp.src = img.src;
}

function resetFilters() {
    const image = document.getElementById('imageShow');
    image.style.filter = 'none';

    const rawImageAdjustments = ['brightness-adjust', 'contrast-adjust', 'tone-adjust', 'highlights-adjust','shadows-adjust', 'saturation-adjust', 'warmth-adjust', 'pop-adjust'];
    rawImageAdjustments.forEach(filterValue => {
        const sliderValue = document.getElementById(filterValue);
        if (sliderValue) {
            sliderValue.value = 0;
        }
    });
}

// scroll-side-filters
    function applyBrightness() {
        const brightnessValue = document.getElementById('brightness-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `brightness(${100 + parseInt(brightnessValue)}%)`;
    }

    function applyContrast() {
        const contrastValue = document.getElementById('contrast-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `contrast(${100 + parseInt(contrastValue)}%)`;
    }

    function applyTone() {
        const toneValue = document.getElementById('tone-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `sepia(${parseInt(toneValue)}%)`;
    }

    function applyHighlights() {
        const highlightsValue = document.getElementById('highlights-adjust').value;
        const image = document.getElementById('imageShow');        
        image.style.filter = `brightness(${100 + parseInt(highlightsValue)}%)`;
    }
    /* credits: anugya mehrotra 
  @ https://github.com/anugyamehrotra 
  | inspired by https://savee.com/  */

    function applyShadows() {
        const shadowsValue = document.getElementById('shadows-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `brightness(${100 + parseInt(shadowsValue)}%)`;
    }

    function applySaturation() {
        const saturationValue = document.getElementById('saturation-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `saturate(${100 + parseInt(saturationValue)}%)`;
    }

    function applyWarmth() {
        const warmthValue = document.getElementById('warmth-adjust').value;
        const image = document.getElementById('imageShow');
        image.style.filter = `sepia(${parseInt(warmthValue)}%) ` ;
    }

    function applyPop() {
        const popValue = document.getElementById('pop-adjust').value;
        const image = document.getElementById('imageShow');     
        image.style.filter = `contrast(${100 + parseInt(popValue)}%) saturate(${100 + parseInt(popValue)}%) brightness(${100 + parseInt(popValue)}%)`;
}

// button filters
    // section one: vintage
        function noneFilter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'none';
        }

        function _1977_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(110%) brightness(110%) saturate(130%)';
        }

        function Amaro_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(90%) brightness(110%) saturate(150%) hue-rotate(-10deg)';
        }

        function Earlybird_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(90%) sepia(20%)'

        }

        function Toaster_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(150%) brightness(90%)'

        }

        function Valencia_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(208%) brightness(108%) sepia(8%)'
        }

    // section two: soft / muted tones
        function Aden_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(90%) brightness(120%) saturate(85%) hue-rotate(20deg)';
        }

        function Brannan_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(140%) sepia(50%)';
        }

        function Gingham_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(105%) hue-rotate(350deg)';
        }

        function Lofi_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(150%) saturate(110%)';
        }

        function Maven_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(95%) brightness(95%) saturate(150%) sepia(25%)';
        }

        function Perpetua_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(110%) contrast(110%) sepia(10%) saturate(130%)';
        }

        function Reyes_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(85%) brightness(110%) saturate(75%) sepia(22%)';
        }

    // section three: black & white / high contrast
        function Brooklyn_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(90%) brightness(110%)';
        }

        function Hudson_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(90%) brightness(120%) saturate(110%)';
        }
        /* credits: anugya mehrotra 
        @ https://github.com/anugyamehrotra 
        | inspired by https://savee.com/  */

        function Inkwell_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)';
        }

        function Stintson_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(75%) brightness(115%) saturate(85%)';
        }

        function Walden_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(110%) saturate(160%) sepia(30%) hue-rotate(350deg)';
        }

        function Clarendon_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(120%) saturate(125%)';
        }

    // section four: city filters
        function Paris_filter() {
        const image = document.getElementById('imageShow');
        image.style.filter = 'brightness(105%) contrast(105%) sepia(10%)';
        }

        function LosAngeles_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(120%) contrast(95%) saturate(130%) hue-rotate(-10deg)';
        }

        function Oslo_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(90%) contrast(90%) grayscale(30%)';
        }

        function Lagos_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(115%) saturate(140%)';
        }
        /* credits: anugya mehrotra 
        @ https://github.com/anugyamehrotra 
        | inspired by https://savee.com/  */

        function Melbourne_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(100%) contrast(110%) hue-rotate(15deg)';
        }

        function Jakarta_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(105%) sepia(15%) brightness(105%)';
        }

        function AbuDhabi_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(115%) sepia(20%) hue-rotate(-5deg)';
        }

        function BuenosAires_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(110%) saturate(120%) brightness(105%)';
        }

        function NewYork_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'contrast(120%) brightness(95%) grayscale(10%)';
        }

        function Jaipur_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'saturate(140%) brightness(105%) sepia(15%) hue-rotate(10deg)';
        }

        function Cairo_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'sepia(30%) brightness(100%) contrast(105%)';
        }

        function Tokyo_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'brightness(110%) contrast(110%) hue-rotate(20deg)';
        }

        function RioDeJaneiro_filter() {
            const image = document.getElementById('imageShow');
            image.style.filter = 'saturate(150%) brightness(115%) contrast(105%)';
        }

        /* credits: anugya mehrotra 
        @ https://github.com/anugyamehrotra 
        | inspired by https://savee.com/  */

// index for all resources

    // CSS Syntax
    // filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

    // https://www.w3schools.com/cssref/css3_pr_filter.php
    // https://developer.mozilla.org/en-US/docs/Web/CSS/filter
    // https://css-tricks.com/almanac/properties/f/filter/
    // https://www.cssfilters.co/#