import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz012-step: \(step)").font(.headline)
            if step == 1 { Text("wz012-intro") }
            if step == 2 { Text("wz012-second") }
            if step == 3 { Text("wz012-finish") }
            HStack {
                Button("wz012-back") { if step > 1 { step -= 1 } }
                Button("wz012-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
