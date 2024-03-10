<script lang="ts">
    import Card from "../Card.svelte";
    import Checkbox from "$lib/components/inputs/Checkbox.svelte";
</script>

<Card>
    <div class="single-matrix">
        <table class="matrix">
            <thead>
                <tr>
                    <th></th>
                    <td>ответ1</td>
                    <td>ответ2</td>
                    <td>ответ3</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">вопрос1</th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
                <tr>
                    <th scope="row">вопрос1</th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
                <tr>
                    <th scope="row">вопрос1</th>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                    <td><Checkbox id="asdad"></Checkbox></td>
                </tr>
            </tbody>
        </table>
    </div>
</Card>

<style lang="scss">
</style>
