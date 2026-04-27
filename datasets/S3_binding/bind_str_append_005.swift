import SwiftUI

struct Editbsa005: View {
    @Binding var text: String
    var body: some View {
        Button("bsa005-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa005-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa005(text: $s)
        }
        .padding()
    }
}
