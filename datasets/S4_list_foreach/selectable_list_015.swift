import SwiftUI

struct ContentView: View {
    @State private var picked = "sl015-none"
    let items = ["sl015-alpha", "sl015-beta", "sl015-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl015-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
