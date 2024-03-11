<script lang="ts">
    import Card from "../Card.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
    import BodyText from "$lib/components/text/BodyText.svelte";
</script>

<Card>
    <div class="single-matrix">
        <table class="matrix">
            <thead>
                <tr>
                    <th></th>
                    <td><BodyText>Ответ 1</BodyText></td>
                    <td><BodyText>Ответ 2</BodyText></td>
                    <td><BodyText>Ответ 3</BodyText></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><BodyText>Вопрос 1</BodyText></th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
                <tr>
                    <th scope="row"><BodyText>Вопрос 2</BodyText></th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
                <tr>
                    <th scope="row"><BodyText>Вопрос 3</BodyText></th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
            </tbody>
        </table>
    </div>
</Card>

<style lang="scss">
    @import "../../../styles/index";

    .single-matrix {
        .matrix {
            table-layout: fixed;
            border: 1px solid $formBorderColor;
            border-radius: 8px;
            width: 100%;
            text-align: center;
            vertical-align: middle;
            overflow: scroll;
            & tr {
                line-height: 50px;
                border-bottom: 1px solid $formBorderColor;
            }
            & td {
                padding: 5px;
                border: 1px solid $formBorderColor;
            }
            & th {
                padding: 5px;
            }
            & tbody td {
                transform: translateX(45%);
            }
        }
    }
</style>
