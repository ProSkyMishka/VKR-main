import SwiftUI

struct ContentView: View {
    @State private var msg = "mch008-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch008-change") { msg = "mch008-changed" }
        }
        .padding()
    }
}
