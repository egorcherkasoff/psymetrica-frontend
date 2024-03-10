<script lang="ts">
    export let placeholder: string = "Введите текст...";
    export let fieldName: string;
</script>

<div class="text-area">
    <label for={fieldName}>{fieldName}</label>
    <textarea id={fieldName} placeholder="{placeholder}..." rows="3" />
</div>

<style lang="scss">
    @import "../../styles/index.scss";

    .text-area {
        margin-top: 15px;
        max-width: 800px;
        & label {
            display: block;
            font-size: $subtitleFontSize;
            font-weight: $subtitleFontWeight;
            font-family: $secondaryFontFamily;
            color: $textColor;
            margin-bottom: 8px;
        }
        & textarea {
            resize: vertical;
            box-sizing: border-box;
            margin: 0;
            width: 100%;
            border-radius: 8px;
            border: 1px solid $formBorderColor;
            font-family: $secondaryFontFamily;
            font-size: $subtitleFontSize;
            font-weight: $subtitleFontWeight;
            padding: 10px 14px 10px 14px;

            &::placeholder {
                color: $placeholderColor;
                font-family: $secondaryFontFamily;
                font-size: $subtitleFontSize;
                font-weight: $subtitleFontWeight;
            }
            &:focus {
                border: 1px solid $primaryColor;
                transition: border 0.2s ease-in-out;
                outline: none;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .text-area {
            & label {
                margin-bottom: 6px;
            }
            & textarea {
                font-size: 16px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .text-area {
            & label {
                margin-bottom: 4px;
            }
        }
    }
</style>
