import SwiftUI

struct ContentView: View {
    @State private var picked = "sl011-none"
    let items = ["sl011-alpha", "sl011-beta", "sl011-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl011-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
