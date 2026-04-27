import SwiftUI

struct Editbsa014: View {
    @Binding var text: String
    var body: some View {
        Button("bsa014-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa014-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa014(text: $s)
        }
        .padding()
    }
}
