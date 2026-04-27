import SwiftUI

struct Editbsa006: View {
    @Binding var text: String
    var body: some View {
        Button("bsa006-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa006-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa006(text: $s)
        }
        .padding()
    }
}
