import SwiftUI

struct Editbsa013: View {
    @Binding var text: String
    var body: some View {
        Button("bsa013-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa013-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa013(text: $s)
        }
        .padding()
    }
}
