import { ref } from "vue";

export function useModalControl() {
    const isOpen = ref(false);
    const entity = ref(null);

    // Getter
    function getIsOpen() {
        return isOpen.value;
    }

    function getTargetEntity() {
        return entity.value;
    }

    // Setter
    function setIsOpen(openStatus) {
        isOpen.value = openStatus;
    }

    function setTargetEntity(target) {
        entity.value = target;
    }

    // Utility Methods
    function launch(target) {
        if (target) {
            setTargetEntity(target);
        }
        isOpen.value = true;
    }

    return {
        getIsOpen, getTargetEntity,
        setIsOpen, setTargetEntity,
        launch
    };
}
