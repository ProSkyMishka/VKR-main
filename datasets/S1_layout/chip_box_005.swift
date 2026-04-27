import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip005-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 15)
                .padding(.vertical, 11)
                .frame(width: 85, height: 35)
                .background(Color.purple)
                .cornerRadius(17)
                .shadow(radius: 2)
        }
        .padding()
    }
}
