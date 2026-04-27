import SwiftUI

struct Editbsa010: View {
    @Binding var text: String
    var body: some View {
        Button("bsa010-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa010-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa010(text: $s)
        }
        .padding()
    }
}
