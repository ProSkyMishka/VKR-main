import SwiftUI

struct ContentView: View {
    @State private var picked = "sl006-none"
    let items = ["sl006-alpha", "sl006-beta", "sl006-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl006-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
