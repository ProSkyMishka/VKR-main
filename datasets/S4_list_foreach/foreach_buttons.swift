import SwiftUI

struct ContentView: View {
    let options = ["One", "Two", "Three"]
    @State private var selected = ""

    var body: some View {
        List(options, id: \.self) { opt in
            Button(opt) {
                selected = opt
            }
        }
        Text("Selected: \(selected)")
    }
}
