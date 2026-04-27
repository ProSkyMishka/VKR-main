import SwiftUI

struct Editbsa009: View {
    @Binding var text: String
    var body: some View {
        Button("bsa009-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa009-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa009(text: $s)
        }
        .padding()
    }
}
