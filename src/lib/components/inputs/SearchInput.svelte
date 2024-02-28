<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<div class="search">
    <i class="fas fa-search" />
    <input type="text" placeholder="Поиск..." />
</div>

<style lang="scss">
    @import "../../styles/index";

    .search {
        position: relative;
        height: 40px;
        width: 100%;
        & i {
            position: absolute;
            top: 13px;
            left: 14px;
            color: $iconColor;
        }
        & input {
            margin: 0;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            border-radius: 8px;
            border: 1px solid $formBorderColor;
            font-family: $secondaryFontFamily;
            font-size: $subtitleFontSize;
            font-weight: $subtitleFontWeight;
            padding-left: 40px;
            padding-right: 14px;

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
</style>
