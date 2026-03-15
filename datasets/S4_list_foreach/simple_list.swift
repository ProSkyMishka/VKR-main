import SwiftUI

struct Item: Identifiable {
    let id = UUID()
    let name: String
}

struct ContentView: View {
    let items = [
        Item(name: "Apple"),
        Item(name: "Banana"),
        Item(name: "Cherry")
    ]

    var body: some View {
        List(items) { item in
            Text(item.name)
        }
    }
}
