import SwiftUI

struct Editbsa004: View {
    @Binding var text: String
    var body: some View {
        Button("bsa004-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa004-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa004(text: $s)
        }
        .padding()
    }
}
