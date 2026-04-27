import SwiftUI

struct Editbsa007: View {
    @Binding var text: String
    var body: some View {
        Button("bsa007-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa007-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa007(text: $s)
        }
        .padding()
    }
}
