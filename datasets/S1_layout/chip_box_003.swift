import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip003-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 13)
                .padding(.vertical, 9)
                .frame(width: 83, height: 33)
                .background(Color.purple)
                .cornerRadius(16)
                .shadow(radius: 2)
        }
        .padding()
    }
}
