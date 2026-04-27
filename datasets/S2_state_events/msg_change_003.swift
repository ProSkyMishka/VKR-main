import SwiftUI

struct ContentView: View {
    @State private var msg = "mch003-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch003-change") { msg = "mch003-changed" }
        }
        .padding()
    }
}
