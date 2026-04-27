import SwiftUI

struct ContentView: View {
    @State private var msg = "mch001-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch001-change") { msg = "mch001-changed" }
        }
        .padding()
    }
}
