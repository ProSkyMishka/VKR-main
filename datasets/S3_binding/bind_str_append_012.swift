import SwiftUI

struct Editbsa012: View {
    @Binding var text: String
    var body: some View {
        Button("bsa012-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa012-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa012(text: $s)
        }
        .padding()
    }
}
