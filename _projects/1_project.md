---
layout: page
title: Dance with Rhythmic Frames
description: Improving Dancing Skills by Frame-by-Frame Presentation
img: assets/img/drf.png
importance: 1
category: work
---

DRF is a VR application for dance learning 
by replaying key poses in sync with rhythm with 3D motion trajectories.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/teaser.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We propose DRF, a virtual reality application for dance learning by replaying key poses in sync with rhythm (frame-by-frame presentation) with 3D motion trajectories extracted from dance videos.
    Compared with video-based presentation methods,learners can more easily associate the poses with the rhythm of the music, potentially leading to an improvement in dance movements.
</div>

Fitness video observation is a common approach in sports practice.
However, in videos, important frames and others are presented at a constant speed, there is a substantial cognitive load in accurately capturing key movements and timing, especially in the quick-paced videos of complex activities such as dance. 


We hypothesize that extracting keyframes from dance videos and replaying them in sync with rhythm (frame-by-frame presentation) can reduce this cognitive load and improve the dance technique execution.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/howtoextractframes.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of the key pose extraction process. First, (a) each frame is automatically extracted from a dance video per beat. Then, (b) manually omit frames that do not match the choreographic key poses.
</div>

Our first study using a 2D display suggests that frame-by-frame presentation is not only as preferred as conventional videos, but also enables more accurate learning of movements. 

Based on that, we developed DRF, a VR application that combines frame-by-frame presentation with motion trajectory visualization. 
User study results indicate that with DRF, users could significantly improve both choreographic dance technique and rhythm accuracy compared to video-based VR systems.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2systems.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The two scenes have a similar overall design but differ in the way 3D human models are presented.
</div>

Qualitative user evaluations from beginners, experienced dancers, and professionals expressed the benefits and potential use of the frame-by-frame presentation method.


