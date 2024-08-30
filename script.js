document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('ElBarrenderoEnamorado');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-1');
    var progressBar1 = document.getElementById('progress-bar-1');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('Inadmisible');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-2');
    var progressBar1 = document.getElementById('progress-bar-2');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('PatoPato');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-3');
    var progressBar1 = document.getElementById('progress-bar-3');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('SugarPopis');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-4');
    var progressBar1 = document.getElementById('progress-bar-4');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('Roskete');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-5');
    var progressBar1 = document.getElementById('progress-bar-5');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('atendeme');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-6');
    var progressBar1 = document.getElementById('progress-bar-6');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('LikeAMonster');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-7');
    var progressBar1 = document.getElementById('progress-bar-7');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('hayQueCosechar');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-8');
    var progressBar1 = document.getElementById('progress-bar-8');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('DulceEstrategia');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-10');
    var progressBar1 = document.getElementById('progress-bar-10');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('LuzDeCorazao');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-11');
    var progressBar1 = document.getElementById('progress-bar-11');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('MeEngome');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-12');
    var progressBar1 = document.getElementById('progress-bar-12');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Contenedor 1
    var audio1 = document.getElementById('ElBarrenderoDeLaNoche');  // Selector corregido
    var playButton1 = document.querySelector('.play-button-13');
    var progressBar1 = document.getElementById('progress-bar-13');

    playButton1.addEventListener('click', function() {
        if (audio1.paused) {
            pauseAllAudios();  // Pausa todas las canciones antes de reproducir esta
            audio1.play();
            playButton1.innerHTML = '&#10074;&#10074;'; // Cambia a pausa
        } else {
            audio1.pause();
            playButton1.innerHTML = '&#9658;'; // Cambia a play
        }
    });

    audio1.addEventListener('timeupdate', function() {
        var value = (audio1.currentTime / audio1.duration) * 100;
        progressBar1.value = value;
    });

    progressBar1.addEventListener('input', function() {
        audio1.currentTime = (progressBar1.value / 100) * audio1.duration;
    });

    // Función para pausar todas las canciones
    function pauseAllAudios() {
        var audios = document.querySelectorAll('audio');
        var playButtons = document.querySelectorAll('.play-button-1, .play-button-2, .play-button-3,.play-button-4, .play-button-5,.play-button-6,.play-button-7,.play-button-8');

        audios.forEach(function(audio, index) {
            if (!audio.paused) {
                audio.pause();
                playButtons[index].innerHTML = '&#9658;'; // Cambia todos los botones a "play"
            }
        });
    }
});