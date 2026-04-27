import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz009-step: \(step)").font(.headline)
            if step == 1 { Text("wz009-intro") }
            if step == 2 { Text("wz009-second") }
            if step == 3 { Text("wz009-finish") }
            HStack {
                Button("wz009-back") { if step > 1 { step -= 1 } }
                Button("wz009-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
