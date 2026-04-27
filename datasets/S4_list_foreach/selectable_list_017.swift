import SwiftUI

struct ContentView: View {
    @State private var picked = "sl017-none"
    let items = ["sl017-alpha", "sl017-beta", "sl017-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl017-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
