import SwiftUI

struct Editbsa001: View {
    @Binding var text: String
    var body: some View {
        Button("bsa001-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa001-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa001(text: $s)
        }
        .padding()
    }
}
