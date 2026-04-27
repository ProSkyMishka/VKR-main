import SwiftUI

struct ContentView: View {
    @State private var picked = "sl013-none"
    let items = ["sl013-alpha", "sl013-beta", "sl013-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl013-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
