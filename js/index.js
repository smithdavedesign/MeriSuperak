// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js
// Add user agent as an attribute on the <html> tag...

var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
//archive.org/download/CarolansDream/MeriMusic
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = '//archive.org/download/CarolansDream/MeriMusic/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Mountain Home Dawning",
                "length": "12:51",
                "file": "Mountain Home Dawning"
            }, {
                "track": 2,
                "name": "Water is Wide",
                "length": "04:15",
                "file": "Water is Wide"
            }, {
                "track": 3,
                "name": "Carolan's Dream",
                "length": "18:26",
                "file": "Carolan's Dream"
            }, {
                "track": 4,
                "name": "Dancing Waters",
                "length": "07:54",
                "file": "Dancing Waters"
            }, {
                "track": 5,
                "name": "Angelic Waltz",
                "length": "03:44",
                "file": "Angelic Waltz"
            }, {
                "track": 6,
                "name": "Far Beyond Yon Mountain",
                "length": "04:22",
                "file": "Far Beyond Yon Mountain"
            }, {
                "track": 7,
                "name": "Deep Longing",
                "length": "05:03",
                "file": "Deep Longing"
            }, {
                "track": 8,
                "name": "Bittersweet Time To Say Goodnight",
                "length": "07:30",
                "file": "Bittersweet Time To Say Goodnight"
            }, {
                "track": 9,
                "name": "Improv in D",
                "length": "04:39",
                "file": "Improv in D"
            }, {
                "track": 10,
                "name": "At The Edge of the White Rock",
                "length": "04:37",
                "file": "At The Edge of the White Rock"
            }, {
                "track": 11,
                "name": "Foggy Dew",
                "length": "05:19",
                "file": "Foggy Dew"
            }, {
                "track": 12,
                "name": "Willow My Friend",
                "length": "10:34",
                "file": "Willow My Friend"
            }, {
                "track": 13,
                "name": "O Wise One)",
                "length": "04:58",
                "file": "O Wise One"
            }, {
                "track": 14,
                "name": "Cherry Tree Carol",
                "length": "05:14",
                "file": "Cherry Tree Carol"
            }, {
                "track": 15,
                "name": "Moon Represents My Heart",
                "length": "04:21",
                "file": "Moon Represents My Heart"
            }, {
                "track": 16,
                "name": "Exploration",
                "length": "03:49",
                "file": "Exploration"
              }],

            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});
