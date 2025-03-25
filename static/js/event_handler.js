document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function n3vSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 6
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'static/resources/comp/coffee_martini/';
                        break;
                    case 1:
                        image.src = 'static/resources/comp/cook_spinach/';
                        break;
                    case 2:
                        image.src = 'static/resources/comp/cut_roasted_beef/';
                        break;
                    case 3:
                        image.src = 'static/resources/comp/flame_salmon/';
                        break;
                    case 4:
                        image.src = 'static/resources/comp/flame_steak/';
                        break;
                    case 5:
                        image.src = 'static/resources/comp/sear_steak/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'MoE.png';
                        break;
                    case 1:
                        image.src = image.src + '4DGaussians.png';
                        break;
                    case 2:
                        image.src = image.src + '4DGS.png';
                        break;
                    case 3:
                        image.src = image.src + 'STG.png';
                        break;
                    case 4:
                        image.src = image.src + 'Ex4DGS.png';
                        break;
                    case 5:
                        image.src = image.src + 'E-D3DGS.png';
                        break;

                }
            }
            

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function TechnicolorSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'static/resources/comp/Birthday/';
                        break;
                    case 1:
                        image.src = 'static/resources/comp/Fabien/';
                        break;
                    case 2:
                        image.src = 'static/resources/comp/Painter/';
                        break;
                    case 3:
                        image.src = 'static/resources/comp/Theater/';
                        break;
                    case 4:
                        image.src = 'static/resources/comp/Train/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'MoE.png';
                        break;
                    case 1:
                        image.src = image.src + 'STG.png';
                        break;
                    case 2:
                        image.src = image.src + 'Ex4DGS.png';
                        break;
                    case 3:
                        image.src = image.src + 'E-D3DGS.png';
                        break;
                }
            }
            

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function videoEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let mediaLength = 1
            for (let i = 0; i < mediaLength; i++) {
                let video = sections[i].getElementsByClassName('b-dics__video-container')[0].getElementsByClassName('b-dics__video')[0]
                switch (idx) {
                    case 0:
                        video.src = 'static/resources/comp/main_video/4DGaussians';
                        break;
                    case 1:
                        video.src = 'static/resources/comp/main_video/4DGS';
                        break;
                    case 2:
                        video.src = 'static/resources/comp/main_video/STG';
                        break;
                    case 3:
                        video.src = 'static/resources/comp/main_video/Ex4DGS';
                        break;
                    case 4:
                        video.src = 'static/resources/comp/main_video/E-D3DGS';
                        break;
                }
                switch (i) {
                    case 0:
                        video.src = video.src + '.mp4';
                        break;
                }
            }
            

            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }


        function separationevent(idx) {
            let dics = document.querySelectorAll('.has-text-centered')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
            switch (idx) {
                case 0:
                    image.src = 'resources/360_stmt_ablation/bicycle_0';
                    break;
                case 1:
                    image.src = 'resources/bicycle_3dgs_vs_ours.mp4';
                    break;
                case 2:
                    image.src = 'resources/360_stmt_ablation/bicycle_5';
                    break;
                case 3:
                    image.src = 'resources/360_stmt_ablation/garden_0';
                    break; 
                case 4:
                    image.src = 'resources/360_stmt_ablation/garden_1';
                    break;
                case 5:
                    image.src = 'resources/360_stmt_ablation/treehill_9';
                    break; 
            }

            let scene_list = document.getElementById("separation-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/360_stmt_ablation/bicycle_0';
                        break;
                    case 1:
                        image.src = 'resources/360_stmt_ablation/bicycle_3';
                        break;
                    case 2:
                        image.src = 'resources/360_stmt_ablation/bicycle_5';
                        break;
                    case 3:
                        image.src = 'resources/360_stmt_ablation/garden_0';
                        break; 
                    case 4:
                        image.src = 'resources/360_stmt_ablation/garden_1';
                        break;
                    case 5:
                        image.src = 'resources/360_stmt_ablation/treehill_9';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_no3d.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_ours.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_upgt.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }