import SwiftUI

struct ContentView: View {
    @State private var count = 3

    var body: some View {
        VStack(spacing: 12) {
            Text("ci010-count: \(count)")
                .font(.title3)
            Button("ci010-inc") { count += 1 }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(6)
        }
        .padding()
    }
}
