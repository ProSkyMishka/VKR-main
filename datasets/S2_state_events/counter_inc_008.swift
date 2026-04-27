import SwiftUI

struct ContentView: View {
    @State private var count = 1

    var body: some View {
        VStack(spacing: 12) {
            Text("ci008-count: \(count)")
                .font(.title3)
            Button("ci008-inc") { count += 4 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
