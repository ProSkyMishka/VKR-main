import SwiftUI

struct ContentView: View {
    @State private var picked = "sl009-none"
    let items = ["sl009-alpha", "sl009-beta", "sl009-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl009-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
