import SwiftUI

struct Editbsa008: View {
    @Binding var text: String
    var body: some View {
        Button("bsa008-append") { text += "x" }
    }
}

struct ContentView: View {
    @State private var s = "bsa008-init"
    var body: some View {
        VStack {
            Text(s)
            Editbsa008(text: $s)
        }
        .padding()
    }
}
