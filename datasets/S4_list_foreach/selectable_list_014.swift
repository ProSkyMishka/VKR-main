import SwiftUI

struct ContentView: View {
    @State private var picked = "sl014-none"
    let items = ["sl014-alpha", "sl014-beta", "sl014-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl014-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
