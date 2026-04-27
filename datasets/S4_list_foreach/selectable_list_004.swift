import SwiftUI

struct ContentView: View {
    @State private var picked = "sl004-none"
    let items = ["sl004-alpha", "sl004-beta", "sl004-gamma"]

    var body: some View {
        VStack(alignment: .leading) {
            Text("sl004-picked: " + picked).font(.headline)
            List {
                ForEach(items, id: \.self) { it in
                    Button(it) { picked = it }
                }
            }
        }
    }
}
