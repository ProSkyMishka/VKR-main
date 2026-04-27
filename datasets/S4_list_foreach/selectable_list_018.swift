import SwiftUI

struct ContentView: View {
    @State private var picked = "sl018-none"
    let items = ["sl018-alpha", "sl018-beta", "sl018-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl018-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
