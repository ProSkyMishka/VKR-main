import SwiftUI

struct Editbsa011: View {
    @Binding var text: String
    var body: some View {
        Button("bsa011-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa011-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa011(text: $s)
        }
        .padding()
    }
}
