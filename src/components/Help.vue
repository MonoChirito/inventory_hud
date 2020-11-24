<template>
    <section>
        <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            v-model="isOpen">
            <div
                slot="trigger"
                class="header"
                role="button"
                aria-controls="contentIdForA11y2">
                <strong>Hilfe und Shortcuts</strong>
            </div>
            <div class="main">
                <b-tabs v-model="activeTab">
                    <b-tab-item label="Items">
                        <b-table
                            :data="items"
                            :columns="columns"
                            >
                        </b-table>
                    </b-tab-item>

                    <b-tab-item label="Waffen">
                        <b-table
                            :data="loadout"
                            :columns="columns"
                            >
                        </b-table>
                    </b-tab-item>
                </b-tabs>
            </div>
        </b-collapse>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                items: [{'id': 1, 'behavior': 'Item aus dem Inventar ziehen', 'action': 'Alle Items dieses Typs ablegen'},
                        {'id': 2, 'behavior': 'Item aus dem Inventar ziehen + STRG', 'action': '1 Stück dieses Items ablegen'},
                        {'id': 3, 'behavior': 'Rechtsklick auf ein Item drücken', 'action': 'Item benutzen'},
                        {'id': 4, 'behavior': 'Mausrad auf ein ITem drücken', 'action': 'Item geben, falls ein Spieler in der Nähe ist'},
                        {'id': 5, 'behavior': 'Linksklick auf den Geben knopf', 'action': 'Item mit der ausgewählten Anzahl geben'},
                        {'id': 6, 'behavior': 'Mausrad auf ein Item drücken + STRG', 'action': 'Item in 2 Slots aufteilen'}],
                loadout: [{'id': 1, 'behavior': 'Linksklick auf eine Waffe', 'action': 'Waffe auswählen und Waffeninfo anzeigen'},
                         {'id': 2, 'behavior': 'Rechtsklick auf eine Waffe + STRG', 'action': 'Waffen Kontextmenu öffnen"'},
                         {'id': 3, 'behavior': 'Linksklick auf "geben" im Kontextmenu', 'action': 'Munition an einen Spieler geben'},
                         {'id': 4, 'behavior': 'STRG + 1 (2, 3, 4, 5) während eine Waffe ausgewählt ist', 'action': 'Waffe auf den Quickswitch Slot zuweisen'}],
                isOpen: false,
                activeTab: 0,
                showBooks: false,
                columns: [
                    {
                        field: 'behavior',
                        label: 'Verhalten',
                    },
                    {
                        field: 'action',
                        label: 'Aktion',
                    },
                ]

            }
        }
    }
</script>
