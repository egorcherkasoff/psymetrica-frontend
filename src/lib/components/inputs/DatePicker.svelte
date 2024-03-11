<script lang="ts">
    export let placeholder: string = "Выберите дату...";
    export let fieldName: string;
</script>

<div class="date-input">
    <label for={fieldName}>{fieldName}</label>
    <input id={fieldName} placeholder="{placeholder}..." type="date" />
</div>

<style lang="scss">
    @import "../../styles/index.scss";

    .date-input {
        width: 100%;
        & label {
            display: block;
            font-size: $subtitleFontSize;
            font-weight: $subtitleFontWeight;
            font-family: $secondaryFontFamily;
            color: $textColor;
            margin-bottom: 8px;
        }
        & input {
            height: 40px;
            box-sizing: border-box;
            margin: 0;
            width: 100%;
            border-radius: 8px;
            border: 1px solid $formBorderColor;
            font-family: $secondaryFontFamily;
            font-size: $subtitleFontSize;
            font-weight: $subtitleFontWeight;
            padding-left: 14px;
            padding-right: 14px;
            margin-bottom: 6px;

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
        &:first-child {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        &:last-child {
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 992px) {
        .date-input {
            & label {
                margin-bottom: 6px;
            }
            & input {
                height: 35px;
                font-size: 16px;
            }
            &:first-child {
                margin-top: 8px;
                margin-bottom: 8px;
            }
            &:last-child {
                margin-bottom: 8px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .date-input {
            & label {
                margin-bottom: 4px;
            }
            & input {
                height: 30px;
            }

            &:first-child {
                margin-top: 6px;
                margin-bottom: 6px;
            }
            &:last-child {
                margin-bottom: 6px;
            }
        }
    }
</style>
