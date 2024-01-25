import QuillFilemanager from "./components/QuillFilemanager.vue";

export default {
    install: (app, options) => {
        app.component("QuillFilemanager", QuillFilemanager);
    }
}