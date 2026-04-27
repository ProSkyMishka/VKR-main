import SwiftUI

struct ContentView: View {
    @State private var picked = "sl002-none"
    let items = ["sl002-alpha", "sl002-beta", "sl002-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl002-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
